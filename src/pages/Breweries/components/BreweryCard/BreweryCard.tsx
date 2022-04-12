/* eslint-disable camelcase */ // @TO-DO remove this line
import React from 'react';

import { BreweryDetail } from 'services/services/BreweriesService/type.BreweriesService';
import { useBreweryContext } from 'pages/Breweries/Context/BreweriesContext';
import { IconsDataTestIdEnum, renderIcon } from 'assets/icons';
import { CardContainer } from './styles.BreweryCard';
import { InfoTag } from './InfoTag';

export const BreweryCard: React.FC<BreweryDetail> = ({
  id,
  name,
  street,
  city,
  state: BreweryState,
  country,
  breweryType,
  postalCode,
  phone,
  moreInfo,
}) => {
  const { deleteBreweryById, addMoreInfo, removeInfoByIndex } =
    useBreweryContext();

  const OnRemoveCard = () => {
    deleteBreweryById(id);
  };

  const handleClickOnAddMoreInfo = (info: string) => {
    addMoreInfo({ breweryId: id, newInfo: info });
  };

  const handleRemoveInfoByIndex = (index: number) => {
    removeInfoByIndex({ breweryId: id, infoIndex: index });
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    if (phoneNumber.length === 10) {
      return phoneNumber.replace(
        /(\d{3})(\d{3})(\d{2})(\d{2})/,
        '+($1) - $2-$3-$4'
      );
    }
    if (phoneNumber.length === 11) {
      return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }
    return (phoneNumber === 'null' && 'no info') || phoneNumber;
  };

  return (
    <CardContainer>
      {renderIcon('TrashIcon', {
        className: 'remove-icon',
        onClick: OnRemoveCard,
      })}
      <h3 className="card-title" data-testid="brewery-title">
        {name}
      </h3>
      <div className="card-info" data-testid="brewery-address">
        <p>
          {street}
          <br />
          {city},{BreweryState} - {country}
        </p>
      </div>

      <div className="tagsList">
        <InfoTag
          icon="GraphIcon"
          text={breweryType}
          data-testid="brewery-brewery-type-tag"
        />
        <InfoTag
          icon="LocationMarkerIcon"
          text={postalCode}
          data-testid="brewery-zipcode-tag"
        />
        <InfoTag
          icon="PhoneIcon"
          text={formatPhoneNumber(String(phone))}
          data-testid="brewery-phone-tag"
        />
        {moreInfo.map((info, index) => (
          <InfoTag
            type="removeable"
            text={info}
            action={() => handleRemoveInfoByIndex(index)}
          />
        ))}
        <InfoTag
          type="addInfo"
          text="add more"
          action={handleClickOnAddMoreInfo}
          data-testid="brewery-add-more-info-tag"
        />
      </div>
    </CardContainer>
  );
};
