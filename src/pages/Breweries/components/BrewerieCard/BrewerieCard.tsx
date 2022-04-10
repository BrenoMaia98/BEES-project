/* eslint-disable camelcase */ // @TO-DO remove this line
import React from 'react';
import { TrashIcon, IconName, renderIcon } from 'assets/icons';

import { BreweryDetail } from 'services/services/BreweriesService/type.BreweriesService';
import { useBreweryContext } from 'pages/Breweries/Context/BreweriesContext';
import { CardContainer, TagDiv } from './styles.BrewerieCard';

const props = {
  id: 299,
  name: 'Almanac Beer Company',
  breweryType: 'micro',
  street: '651B W Tower Ave',
  address_2: null,
  address_3: null,
  city: 'Alameda',
  state: 'California',
  county_province: null,
  postalCode: '94501-5047',
  country: 'United States',
  longitude: '-122.306283180899',
  latitude: '37.7834497667258',
  phone: '4159326531',
  website_url: 'http://almanacbeer.com',
  updated_at: '2018-08-23T23:24:11.758Z',
  created_at: '2018-08-23T23:24:11.758Z',
};

type TagProps = {
  icon: IconName;
  text: string;
  onClick?: () => void;
};

const Tag = ({ icon, text, onClick }: TagProps) => {
  return (
    <TagDiv onClick={() => (onClick ? onClick() : undefined)}>
      {renderIcon(icon)}
      <span>{text || 'no info'}</span>
    </TagDiv>
  );
};

export const BrewerieCard: React.FC<BreweryDetail> = ({
  id,
  name,
  street,
  city,
  state,
  country,
  breweryType,
  postalCode,
  phone,
}) => {
  const { deleteBreweryById } = useBreweryContext();
  const handleClickOnAddMore = () => {
    console.log('clicked');
  };
  const OnRemoveCard = () => {
    deleteBreweryById(id);
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
      <TrashIcon className="remove-icon" onClick={OnRemoveCard} />
      <h3 className="card-title">{name}</h3>
      <div className="card-info">
        <p>
          {street}
          <br />
          {city},{state} - {country}
        </p>
      </div>

      <div className="tagsList">
        <Tag icon="GraphIcon" text={breweryType} />
        <Tag icon="LocationMarkerIcon" text={postalCode} />
        <Tag icon="PhoneIcon" text={formatPhoneNumber(String(phone))} />
        <Tag
          icon="PlusOutlineIcon"
          text="add more"
          onClick={handleClickOnAddMore}
        />
      </div>
    </CardContainer>
  );
};
